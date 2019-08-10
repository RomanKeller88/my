const init = function(){
    cssScrollSnapPolyfill()
}
init();

(function() {

    // slider one
    const pageNum = document.getElementsByClassName('pageNum1')[0]
    const pageTotal = document.getElementsByClassName('pageTotal1')[0]
    const blocks = document.querySelectorAll('.slider_item1')
    
    pageTotal.textContent = blocks.length < 10 ? '0' + blocks.length : blocks.length
    
    function scrollZ(e) {
        const blockWrap = document.getElementsByClassName('slider')[0]
        const w = blockWrap.scrollWidth
        const l = blockWrap.scrollLeft
        const num = +pageNum.textContent
        if (e.target.classList.contains('arrow_left')) {
            if (num > 1) {
                pageNum.textContent = num < 10 ? '0' + (num - 1) : num - 1
            }
            blockWrap.scrollTo({
                top: 0,
                left: l - blocks[num -1].offsetWidth,
                behavior: 'smooth'
            })
        } else {
            if (blocks.length > num) {
                pageNum.textContent = num < 10 ? '0' + (num + 1) : num + 1
            }
            blockWrap.scrollTo({
                top: 0,
                left: l + blocks[num -1].offsetWidth,
                behavior: 'smooth'
            })
        }
    }
    const prev = document.getElementsByClassName('arrow_left')[0]
    const next = document.getElementsByClassName('arrow_right')[0]
    prev.addEventListener("click", scrollZ, false)
    next.addEventListener("click", scrollZ, false)

    // slider two
    const pageNum2 = document.getElementsByClassName('pageNum2')[0]
    const pageTotal2 = document.getElementsByClassName('pageTotal2')[0]
    const blocks2 = document.querySelectorAll('.slider_item2')
    pageTotal2.textContent = blocks2.length < 10 ? '0' + blocks2.length : blocks2.length
    
    function scrollZ2(e) {
        const blockWrap2 = document.getElementsByClassName('slider2')[0]
        const w = blockWrap2.scrollWidth
        const l = blockWrap2.scrollLeft
        const num = +pageNum2.textContent
        if (e.target.classList.contains('arrow_left2')) {
            if (num > 1) {
                pageNum2.textContent = num < 10 ? '0' + (num - 1) : num - 1
            }
            blockWrap2.scrollTo({
                top: 0,
                left: l - blocks2[num -1].offsetWidth,
                behavior: 'smooth'
            })
        } else {
            if (blocks2.length > num) {
                pageNum2.textContent = num < 10 ? '0' + (num + 1) : num + 1
            }
            blockWrap2.scrollTo({
                top: 0,
                left: l + blocks2[num -1].offsetWidth,
                behavior: 'smooth'
            })
        }
    }
    const prev2 = document.getElementsByClassName('arrow_left2')[0]
    const next2 = document.getElementsByClassName('arrow_right2')[0]
    prev2.addEventListener("click", scrollZ2, false)
    next2.addEventListener("click", scrollZ2, false)

    // slider tree
    const pageNum3 = document.getElementsByClassName('pageNum3')[0]
    const pageTotal3 = document.getElementsByClassName('pageTotal3')[0]
    const blocks3 = document.querySelectorAll('.slider_item3')
    pageTotal3.textContent = blocks3.length < 10 ? '0' + blocks3.length : blocks3.length
    
    function scrollZ3(e) {
        const blockWrap3 = document.getElementsByClassName('slider3')[0]
        const w = blockWrap3.scrollWidth
        const l = blockWrap3.scrollLeft
        const num = +pageNum3.textContent
        if (e.target.classList.contains('arrow_left3')) {
            if (num > 1) {
                pageNum3.textContent = num < 10 ? '0' + (num - 1) : num - 1
            }
            blockWrap3.scrollTo({
                top: 0,
                left: l - blocks3[num -1].offsetWidth,
                behavior: 'smooth'
            })
        } else {
            if (blocks3.length > num) {
                pageNum3.textContent = num < 10 ? '0' + (num + 1) : num + 1
            }
            blockWrap3.scrollTo({
                top: 0,
                left: l + blocks3[num -1].offsetWidth,
                behavior: 'smooth'
            })
        }
    }
    const prev3 = document.getElementsByClassName('arrow_left3')[0]
    const next3 = document.getElementsByClassName('arrow_right3')[0]
    prev3.addEventListener("click", scrollZ3, false)
    next3.addEventListener("click", scrollZ3, false)


    // slider four
    const pageNum4 = document.getElementsByClassName('pageNum4')[0]
    const pageTotal4 = document.getElementsByClassName('pageTotal4')[0]
    const blocks4 = document.querySelectorAll('.slider_item4')
    pageTotal4.textContent = blocks4.length < 10 ? '0' + blocks4.length : blocks4.length
    
    function scrollZ4(e) {
        const blockWrap4 = document.getElementsByClassName('slider4')[0]
        const w = blockWrap4.scrollWidth
        const l = blockWrap4.scrollLeft
        const num = +pageNum4.textContent
        if (e.target.classList.contains('arrow_left4')) {
            if (num > 1) {
                pageNum4.textContent = num < 10 ? '0' + (num - 1) : num - 1
            }
            blockWrap4.scrollTo({
                top: 0,
                left: l - blocks4[num -1].offsetWidth,
                behavior: 'smooth'
            })
        } else {
            if (blocks4.length > num) {
                pageNum4.textContent = num < 10 ? '0' + (num + 1) : num + 1
            }
            blockWrap4.scrollTo({
                top: 0,
                left: l + blocks4[num -1].offsetWidth,
                behavior: 'smooth'
            })
        }
    }
    const prev4 = document.getElementsByClassName('arrow_left4')[0]
    const next4 = document.getElementsByClassName('arrow_right4')[0]
    prev4.addEventListener("click", scrollZ4, false)
    next4.addEventListener("click", scrollZ4, false)


})()