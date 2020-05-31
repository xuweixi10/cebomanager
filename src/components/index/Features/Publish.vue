<template>
    <div class="publish">
        <div class="guide">
            <div class="current"></div>
            <div v-for="(value,i) in competitions" :class='[active===i?"current item":"item"]' v-bind:key="value">
                {{value}}
            </div>
        </div>
        <CompetitionInformation  v-if="active===0" class="competition"></CompetitionInformation>
        <TeamInformation v-if="active===1" class="competition"></TeamInformation>
        <TeamMember v-if="active===2" class="competition"></TeamMember>
        <div class="buttons">
            <div v-if="active>0" class="button" @click="lastPage">上一项</div>
            <div v-if="active<2" class="button" @click="afterPage">下一项</div>
        </div>
    </div>
</template>

<script>
    import CompetitionInformation
        from "@/components/index/Features/publish/CompetitionInfomation/CompetitionInformation";
    import TeamInformation from "@/components/index/Features/publish/team/TeamInformation";
    import TeamMember from "@/components/index/Features/publish/team/TeamMember";
    export default {
        name: "Publish",
        components: {TeamMember, TeamInformation, CompetitionInformation},
        data(){
            return{
                active:0,
                competitions:["比赛信息","队伍信息","队员信息"]
            }
        },
        methods:{
            lastPage(){
                this.active--;
            },
            afterPage(){
                this.active++;
            }
        }
    }
</script>

<style scoped>
    .publish{
        font-size: 1vw;
    }
    .guide{
        position: relative;
        top: 4vh;
        width: 42vw;
        height: 10vh;
        left: 30vh;
    }
    .guide .item{
        position: relative;
        float: left;
        width: 14vw;
        line-height: 10vh;
        height: 10vh;
        font-size: 1.1vw;
        font-weight: 600;
    }
    .guide .current{
        background-color: beige;
    }
    .competition{
        position: relative;
        top: 6vh;
        width: 90%;
        left: 5%;
        height: 58vh;
        background-color: #42b983;
    }
    .buttons{
        position: absolute;
        bottom: 1vh;
        width: 10vw;
        left: 32vw;
    }
    .buttons .button{
        position: relative;
        float: left;
        padding: .5vh;
        margin: .5vh;
        background-color: #37eeff;
        border-radius: .2vw;
        cursor: pointer;
    }
</style>