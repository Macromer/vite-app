import React from 'react'

export default function MyPage() {
    return(
        <div>
            <h1>子应用</h1>
            <micro-app
                name='app-child' // name(必传)：应用名称
                url='http://localhost:3001/appChild/' // url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
                baseroute='/my-page' // baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
                inline // 使用内联script模式
                disableSandbox // 关闭沙箱
            ></micro-app>
        </div>
    )
}
