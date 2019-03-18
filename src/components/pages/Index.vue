<template>
    <div>

        <headComponent :headData="headmsg"></headComponent>

        <div id="main">
            <van-row type="flex" justify="center">
                <van-col span="14">
                    <ul id='left_ul'>
                    
                        <li v-for="item in list" :key="item.id"><a  @click="goShow(item.ID)">{{ item.TITLE }}</a></li>
                      
                    </ul>
                   <van-pagination @change="goList(currentPage)" v-model="currentPage" :total-items="totalitems" :items-per-page="3" :show-page-size="3" 
  force-ellipses/>
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
                totalitems: 0,
                list: [],
                recent: [],
            }
        },
        components:{headComponent, footComponent, rightComponent},
        created() {
           this.currentPage =  Number(this.$route.query.per ? this.$route.query.per: 1);
           console.log(this.currentPage);
           this.getList();
           this.getRecent();
        },
         watch:{
            '$route' (to, from) { //监听路由是否变化
                if(this.$route.query.per){//判断id是否有值
                    this.currentPage =  Number(this.$route.query.per ? this.$route.query.per: 1);
                   this.getList();
                }
            }
        },
        methods: {
            getList(){
                axios(url.articleList, {
                    params: {
                        page: this.currentPage
                    }
                })
                .then(response => {
                    this.list = response.data.message;
                    this.totalitems = response.data.count;
                    //console.log(response.data)
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
             //分页跳转 
            goList(page){
                this.$router.push({path:'/',query:{per:page}})
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