var tabItems = document.querySelectorAll('.nav-item')
var tabPanes = document.querySelectorAll('.tab-pane')
var tabLine = document.querySelector('.line')
var tabActive = document.querySelector('.nav-item.active')

tabLine.style.left = tabActive.offsetLeft + 'px'
tabLine.style.width = tabActive.offsetWidth + 'px'

tabItems.forEach((tabItem, index) => {
    tabItem.onclick = function () {
        document.querySelector('.nav-item.active').classList.remove('active')
        this.classList.add('active')

        document.querySelector('.tab-pane.active').classList.remove('active')
        tabPanes[index].classList.add('active')

        tabLine.style.left = this.offsetLeft + 'px'
        tabLine.style.width = this.offsetWidth + 'px'
    }
})


