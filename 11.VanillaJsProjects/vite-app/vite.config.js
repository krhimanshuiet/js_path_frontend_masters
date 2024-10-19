import { defineConfig } from "vite";

export default defineConfig({
    base:"https://my.site.com/projects/",
    server:{
        port:1234
    },
    build:{
        target:[
            "firefox",
            "safari"
        ]
    }
})