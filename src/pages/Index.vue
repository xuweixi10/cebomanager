<template>
    <div id="app">
        <Top></Top>
        <div class="left features">
            <div v-for="(item,i) in features" v-bind:key="item" :class='[i===activeFeatures ? "feature active" : "feature"]' @click="clickFeatures(i)">
                {{item}}
            </div>
        </div>
        <div class="right">
            <div v-if="activeFeatures===0">
                <Publish></Publish>
            </div>
            <div v-else-if="activeFeatures===1">
                <ViewCompetition></ViewCompetition>
            </div>
        </div>

    </div>
</template>

<script>
    //import LoginForm from "@/components/login/LoginForm";
    import Top from "@/components/common/Top";
    import Publish from "@/components/index/Features/Publish";
    import ViewCompetition from "@/components/index/Features/ViewCompetition";
    export default {
        name: 'App',
        components: {
            ViewCompetition,
            Publish,
            Top
        },
        data(){
            return{
                features:["发布比赛","查看比赛"],
                activeFeatures:0,
            }
        },
        methods:{
            clickFeatures(e){
                console.log(e);
                this.activeFeatures=e;
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    body{
        margin: 0;
    }
    .left{
        position: relative;
        float: left;
        top: 4vh;
        left: 5vw;
        width: 10vw;
        height: 80vh;
        border: 0.05vw solid #2c3e50;
    }
    .right{
        position: relative;
        float: left;
        top: 4vh;
        left: 10vw;
        width: 74vw;
        height: 80vh;
        border: 0.05vw solid #2c3e50 ;
    }
    .feature{
        position: relative;
        height: 10vh;
        line-height: 10vh;
        font-size: 1vw;
        font-weight: 400;
        cursor: pointer;
        /*transition*/
        transition: background-color 0.8s;
        -moz-transition: background-color 0.8s;	/* Firefox 4 */
        -webkit-transition: background-color 0.8s;	/* Safari 和 Chrome */
        -o-transition: background-color 0.8s;
    }
    .active{
        background-color: #42b983;
    }
</style>
