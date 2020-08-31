module.exports = {
    title: 'Rong的博客',
    description: '专注 前端 技术栈分享，从前端到数据可视化再到Unity',

    themeConfig: {
        nav: [{ text: "主页", link: "/" },
            { text: "前端", link: "/web/" },
            { text: "unity", link: "/unity/" },
            { text: "ventuz", link: "/ventuz/" },
            { text: "blender", link: "/blender/" },
            { text: "面试问题", link: "/interview/" }
        ],
        sidebar: {
            "/web/": [
                ["", "web目录"],
                ["CSS/", "CSS世界"],
                ["JS/", "JS忍者秘籍"],
                ["VUE/", "vue快速入门"]
            ],
        }
    },
    serviceWorker: true

}