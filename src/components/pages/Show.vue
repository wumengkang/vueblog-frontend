<template>
    <div>
        
        <headComponent :headData="headmsg"></headComponent>
        <div id="main">
            <van-row type="flex" justify="center">
                <van-col span="14">
                    <div id="show_content">
                        Welcome to Hexo! This is your very first post. Check documentation for more info. 
                        If you get any problems when using Hexo, you can find the answer in troubleshooting
                         or you can ask me on GitHub.
                        Quick Start
                        Create a new post
                    </div>
                </van-col>
                <van-col span="6">
                    <rightComponent></rightComponent>      
                </van-col>
            </van-row>    
        </div>
        <footComponent></footComponent>

    </div>
</template>

<script>
    import headComponent from '../component/headComponent'
    import footComponent from '../component/footComponent'
    import rightComponent from '../component/rightComponent'

    export default {
        data (){
            return {
                currentPage: 1,
                headmsg: 'SHOW'
            }
        },
         components:{headComponent, footComponent, rightComponent},
    }
</script>

<style scoped>
#main{
    min-height: 340px;
}
#blog_list span{
    color: red;
    float: right;
    padding-right: 2rem; 
}
#show_content{
    padding-top: 15px;
    min-height: 330px;
    color: #666;
}
</style>