
const App = {
    data(){
        return{
            courseList:[{
                id:"course1",
                courseName:"Vue Js",
                subtitle:"Learning Path is simple ",
                price:"299",
                courseImage:"",
                url:""
            },{
                id:"course2",
                courseName:"C #",
                subtitle:"Backend Language" ,
                price:"99",
                courseImage:"",
                url:""
            },{
                id:"course3",
                courseName:".Net",
                subtitle:"It is a Framework",
                price:"299",
                courseImage:"",
                url:""
            }]
        }
    }
}

Vue.createApp(App).mount("#vue_app")