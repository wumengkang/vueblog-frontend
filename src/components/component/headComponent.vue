<template>
    <div>
        <div id='head'>
            <van-row type="flex" justify="center">
                <van-col span="20" id='head_top'><a href="/">Home</a></van-col> 
            </van-row>      
            <van-row type="flex" justify="center">    
                <van-col span="24" id="head_center"><h1>{{ blogname }}</h1></van-col>     
            </van-row>    
        </div>
    </div>
</template>

<script>
    export default {
        props:['headData'],
        data (){
            return {
                msg: '../../assets/images/banner.jpg',
                blogname: this.headData,
            }
        },
    }
</script>

<style scoped>
#head {
    height: 230px;
    width: 100%;
    background: url('/static/img/banner.jpg') center #000;
}
#head_top{
    padding-top:9px;
}
#head_top a{
    color: #999
}
#head_center{
    padding-top: 30px;
    text-align: center;
    color: #999;
}
</style>