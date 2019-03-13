<template>
    <div>

        <headComponent :headData="headmsg"></headComponent>

        <div id="main">
            <van-row type="flex" justify="center">
                <van-col span="14">
                    <ul id='left_ul'>
                    
                        <li v-for="item in list" :key="item.id"><a  @click="goShow(item.ID)">{{ item.TITLE }}</a></li>
                      
                    </ul>
                   <van-pagination v-model="currentPage" :total-items="24" :items-per-page="5"/>
                </van-col>
                <van-col span="6">
                      <rightComponent :rightDate="recent"></rightComponent>
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
    import url from '@/serviceAPI.config.js'
    import axios from 'axios'
    
    export default {
        data (){
            return {
                currentPage: 1,
                headmsg: 'HOME',
                list: [],
                recent: [],
            }
        },
        components:{headComponent, footComponent, rightComponent},
        created() {
           this.getList();
           this.getRecent();
        },
        methods: {
            getList(){
                axios(url.articleList)
                .then(response => {
                    this.list = response.data.message;
                    console.log(response.data.message)
                })
                .catch((error) => {
                    console.log(error)
                })
            },
            getRecent(){
                axios(url.recentArticle)
                .then(response => {
                    this.recent = response.data.message;
                })
                .catch((error) => {
                    console.log(error)
                })
            },
            //跳转 
            goShow(id){
                this.$router.push({path:'/show',query:{aid:id}})
            }
        }
        
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
#left_ul{
  font-size: 14px;
}
#left_ul li{
    line-height: 33px;
}
#left_ul li a{
     color: #666;
}
</style>