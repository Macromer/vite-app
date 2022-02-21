import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import AppRoute from "./router";
import microApp from '@micro-zoe/micro-app'
microApp.start({
    plugins: {
        modules: {
            // appName即应用的name值
            appChild: [{
                loader(code) {
                    if (process.env.NODE_ENV === 'development') {
                        // 这里 basename 需要和子应用vite.config.js中base的配置保持一致
                        code = code.replace(/(from|import)(\s*['"])(\/appChild\/)/g, all => {
                            return all.replace('/appChild/', 'http://localhost:3001/appChild/')
                        })
                    }

                    return code
                }
            }]
        }
    }
})
ReactDOM.render(
    <AppRoute/>,
  document.getElementById('root')
)
