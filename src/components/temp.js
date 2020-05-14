<div className='pt-3'>
<div className="custom-control custom-switch">
  <label
    className="custom-control-label"
    forHtml="customSwitch1"
    onClick={() => {
      this.setState(state => ({ isOnline: !state.isOnline }))
    }}
  >
    Status: {isOnline ? 'online' : 'offline'}
  </label>
</div>
</div>