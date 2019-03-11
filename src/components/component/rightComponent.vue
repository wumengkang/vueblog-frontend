<template>
    <div>
        <h4 id="right_title">RECENT POSTS</h4>
        <ul id ="right_ul">
            <li v-for="item in rencentlist" :key="item.id"><router-link to="/show">{{ item.TITLE }}</router-link></li>
        </ul>      
    </div>
</template>

<script>
    export default {
        props:['rightDate'],
        data (){
            return {
                rencentlist: [],
            }
        },
        created(){
            
        },
        watch:{
            rightDate:function(val){
                this.rencentlist = this.rightDate;
            }
        }
    }
</script>

<style scoped>
#right_title{
    color: #666;
    padding-left: 0.35rem;
}
#right_ul{
    padding-left: 0.55rem;
    font-size: 13px;
}
#right_ul li {
     line-height: 30px;
}
#right_ul li a{
     color: #666;
}
</style>