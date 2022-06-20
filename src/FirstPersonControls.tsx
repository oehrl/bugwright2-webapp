import { Camera, Vector3, MathUtils} from "three"

/**
 * FirstPersonControls class
 *
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author paulirish / http://paulirish.com/
 */
class FirstPersonControls {
  target = new Vector3( 0, 0, 0)

  enabled = true

  movementSpeed = 1.0
  lookSpeed = 0.005

  lookVertical = true
  autoForward = false

  activeLook = false

  heightSpeed = false
  heightCoef = 1.0
  heightMin = 0.0
  heightMax = 1.0

  constrainVertical = false
  verticalMin = 0
  verticalMax = Math.PI

  autoSpeedFactor = 0.0

  mouseX = 0
  mouseY = 0

  lat = 0
  lon = 0
  phi = 0
  theta = 0

  moveForward = false
  moveBackward = false
  moveLeft = false
  moveRight = false
  moveUp = false
  moveDown = false

  mouseDragOn = false

  viewHalfX = 0
  viewHalfY = 0

  _contextMenu = this.contextMenu.bind(this)
  _onMouseMove = this.onMouseMove.bind(this)
  _onMouseDown = this.onMouseDown.bind(this)
  _onMouseUp = this.onMouseUp.bind(this)
  _onKeyDown = this.onKeyDown.bind(this)
  _onKeyUp = this.onKeyUp.bind(this)
  _onBlur = this.onBlur.bind(this)

  /**
   * Constructor
   * @param  {object} object     Object
   * @param  {object} domElement Dom element
   */
  constructor(public object: Camera, public domElement: any = document ) {
    this.object = object

    if (this.domElement !== document) {
      this.domElement.setAttribute('tabindex', - 1)
    }

    this.handleResize()
    this.bindEvents()
  }

  /**
   * HandleResize function
   */
  handleResize() {
    if ( this.domElement === document ) {
      this.viewHalfX = window.innerWidth / 2
      this.viewHalfY = window.innerHeight / 2
    } else {
      this.viewHalfX = this.domElement.offsetWidth / 2
      this.viewHalfY = this.domElement.offsetHeight / 2
    }
  }

  /**
   * BindEvents function
   */
  bindEvents() {
    this.domElement.addEventListener( 'contextmenu', this._contextMenu, false )
    this.domElement.addEventListener( 'mousemove', this._onMouseMove, false )
    this.domElement.addEventListener( 'mousedown', this._onMouseDown, false )
    this.domElement.addEventListener( 'mouseup', this._onMouseUp, false )

    this.domElement.addEventListener( 'keydown', this._onKeyDown, false )
    this.domElement.addEventListener( 'keyup', this._onKeyUp, false )
    this.domElement.addEventListener('blur', this._onBlur, false);
  }

  /**
   * OnMouseDown function
   * @param  {object} event Event
   */
  onMouseDown(event: MouseEvent) {
    if (this.domElement !== document) {
      this.domElement.focus()
    }

    event.preventDefault()
    event.stopPropagation()

    this.mouseDragOn = true
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  /**
   * OnMouseUp function
   * @param  {object} event Event
   */
  onMouseUp(event: MouseEvent) {
    event.preventDefault()
    event.stopPropagation()

    if ( this.activeLook ) {
      switch ( event.button ) {
      case 0:
        this.moveForward = false
        break
      case 2:
        this.moveBackward = false
        break
      }
    }

    this.mouseDragOn = false
  }

  /**
   * OnMouseMove function
   * @param  {object} event Event
   */
  onMouseMove(event: MouseEvent) {
    const deltaX = event.clientX - this.mouseX;
    const deltaY = event.clientY - this.mouseY;

    if (this.mouseDragOn) {
      this.phi -= deltaY * this.lookSpeed;
      this.theta += deltaX * this.lookSpeed;
    }

    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  onKeyDown(event: KeyboardEvent) {
    switch (event.code) {
      case "ArrowUp":
      case "KeyW":
        this.moveForward = true
        break

      case "ArrowLeft":
      case "KeyA":
        this.moveLeft = true
        break

      case "ArrowDown":
      case "KeyS":
        this.moveBackward = true
        break

      case "ArrowRight":
      case "KeyD":
        this.moveRight = true
        break

      case "KeyE":
        this.moveUp = true
        break
      case "KeyQ":
        this.moveDown = true
        break
    }
  }

  /**
   * OnKeyUp function
   * @param  {object} event Event
   */
  onKeyUp(event: KeyboardEvent) {
    switch (event.code) {
      case "ArrowUp":
      case "KeyW":
        this.moveForward = false
        break

      case "ArrowLeft":
      case "KeyA":
        this.moveLeft = false
        break

      case "ArrowDown":
      case "KeyS":
        this.moveBackward = false
        break

      case "ArrowRight":
      case "KeyD":
        this.moveRight = false
        break

      case "KeyE":
        this.moveUp = false
        break
      case "KeyQ":
        this.moveDown = false
        break
    }
  }

  onBlur(event: Event) {
    this.mouseDragOn = false;
  }

  /**
   * Update function
   * @param  {object} delta Delta
   */
  update(delta: number) {
    if ( this.enabled === false ) {
      return
    }

    if ( this.heightSpeed ) {
      let y = MathUtils.clamp( this.object.position.y, this.heightMin, this.heightMax )
      let heightDelta = y - this.heightMin

      this.autoSpeedFactor = delta * ( heightDelta * this.heightCoef )

    } else {
      this.autoSpeedFactor = 0.0
    }

    let actualMoveSpeed = delta * this.movementSpeed

    if ( this.moveForward || ( this.autoForward && ! this.moveBackward ) ) {
      this.object.translateZ( - ( actualMoveSpeed + this.autoSpeedFactor ) )
    }
    if ( this.moveBackward ) {
      this.object.translateZ( actualMoveSpeed )
    }

    if ( this.moveLeft ) {
      this.object.translateX( - actualMoveSpeed )
    }
    if ( this.moveRight ) {
      this.object.translateX( actualMoveSpeed )
    }

    if ( this.moveUp ) {
      this.object.translateY( actualMoveSpeed )
    }
    if ( this.moveDown ) {
      this.object.translateY( - actualMoveSpeed )
    }

    // let actualLookSpeed = delta * this.lookSpeed

    // if ( ! this.activeLook ) {
    //   actualLookSpeed = 0
    // }

    // let verticalLookRatio = 1

    // if ( this.constrainVertical ) {
    //   verticalLookRatio = Math.PI / ( this.verticalMax - this.verticalMin )
    // }

    // this.lon += this.mouseX * actualLookSpeed
    // if ( this.lookVertical ) {
    //   this.lat -= this.mouseY * actualLookSpeed * verticalLookRatio
    // }

    // this.lat = Math.max( - 85, Math.min( 85, this.lat ) )
    // this.phi = MathUtils.degToRad( 90 - this.lat )

    // this.theta = MathUtils.degToRad( this.lon )

    // if ( this.constrainVertical ) {
    //   this.phi = MathUtils.mapLinear( this.phi, 0, Math.PI, this.verticalMin, this.verticalMax )
    // }

    let targetPosition = this.target
    let position = this.object.position

    targetPosition.x = position.x + 100 * Math.cos( this.phi ) * Math.sin( this.theta )
    targetPosition.y = position.y + 100 * Math.sin( this.phi )
    targetPosition.z = position.z - 100 * Math.cos( this.phi ) * Math.cos( this.theta )

    this.object.lookAt( targetPosition )
  }

  /**
   * ContextMenu function
   * @param  {object} event Event
   */
  contextMenu( event: Event ) {
    event.preventDefault()
  }

  /**
   * Dispose function
   */
  dispose() {
    this.domElement.removeEventListener( 'contextmenu', this._contextMenu, false )
    this.domElement.removeEventListener( 'mousedown', this._onMouseDown, false )
    this.domElement.removeEventListener( 'mousemove', this._onMouseMove, false )
    this.domElement.removeEventListener( 'mouseup', this._onMouseUp, false )

    this.domElement.removeEventListener( 'keydown', this._onKeyDown, false )
    this.domElement.removeEventListener( 'keyup', this._onKeyUp, false )
    this.domElement.removeEventListener( 'blur', this._onBlur, false )
  }
}

export default FirstPersonControls
