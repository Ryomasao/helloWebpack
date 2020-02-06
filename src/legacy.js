  function PageView() {
    console.log('Page view')
  }

  function globalFunction() {
    console.log('i am global function')
    const h = window
    //h.PageView()
  }


  window.a = 'you do not do like this'
  globalFunction()
  console.log('legacy code was execed')
