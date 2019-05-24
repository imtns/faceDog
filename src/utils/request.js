import wepy from 'wepy'

const http = (method, ...props) => new Promise((resolve, reject) => {
    try {
        const url = props[0]
        let data = (props[1] && props[1].data) || ''
        if (typeof data === 'function') {
            resolve(data)
            data = {}
        }
        wx.showLoading && wx.showLoading({ title: '加载中', mask: true })
        let header = props[1] ? props[1].header : null
        wepy.request({
            url: url + (~url.indexOf('?') ? '' : '?'),
            data,
            method: method,
            dataType: 'json',
            header: {
                'content-type': method === 'GET' ? 'application/json' : 'application/x-www-form-urlencoded',
                ...header
            },
            success(response) {
                resolve(response)
            },
            fail(e) {
                reject(e)
            },
            complete() {
                wx.hideLoading && wx.hideLoading()
            }
        })
    } catch (e) {
        console.log(e)
    }
})
module.exports.get = (...props) => http('GET', ...props)
module.exports.post = (...props) => http('POST', ...props)
