<template>
    <div>
        
        <headComponent :headData="headmsg"></headComponent>
        <div id="main">
            <van-row type="flex" justify="center">
                <van-col span="14">
                    <h3>{{ title }}</h3>
                    <div id="show_content">
                        {{ content }}
                    </div>
                    <div id='comment'>
                        <ul id="comment_content">
                            <li v-for="msg in msgs" :key="msg.id">" {{ msg.MSG }} "</li>
                        </ul>
                        <van-cell-group>
                            <van-field v-model="value" placeholder="请输入评论" />
                            <van-button @click="submit()" size="small">提交评论</van-button>
                        </van-cell-group>
                    </div>
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
                showId:'',
                title:'',
                content:'',
                headmsg: 'SHOW',
                value: '',
                recent: [],
                msgs: [],
            }
        },
        components:{headComponent, footComponent, rightComponent},
        created() {
            this.showId =  this.$route.query.aid ? this.$route.query.aid: this.$route.params.aid
            this.getInfo();
            this.getRecent();
        },
        watch:{
            '$route' (to, from) { //监听路由是否变化
                if(this.$route.query.aid){//判断id是否有值
                   this.showId =  this.$route.query.aid ? this.$route.query.aid: this.$route.params.aid
                   this.getInfo();
                }
            }
        },
        methods: {
            getInfo(){
                axios.get(url.articleShow+'/'+this.showId)
                .then(response => {
                    this.title = response.data.message.TITLE;
                    this.content = response.data.message.CONTENT;
                    this.msgs = response.data.message.COMMENT;
                    //console.log(response.data.message);
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
#show_content{
    padding-top: 15px;
    min-height: 230px;
    color: #666;
}
#comment_content li {
    font-size: 12px;
    line-height: 18px;
}
</style>