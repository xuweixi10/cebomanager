<template>
    <div>
        <div class="basicInformation">
            <form>
                <table class="competition">
                    <tr>
                        <td>比赛名称：</td>
                        <td>
                            <label>
                                <input type="text" placeholder="输入比赛的名称">
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>比赛时间:</td>
                        <td class="time">
                            <label>
                                <input type="date" placeholder="开始时间">
                            </label>
                            <label>--</label>
                            <label>
                                <input type="date" placeholder="开始时间">
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>主办方:</td>
                        <td><label>
                            <input type="text" v-model="organizer">
                        </label></td>
                    </tr>
                    <tr>
                        <td>参加人数:</td>
                        <td>
                            <div class="persons">
                                <label v-bind:key="c"  v-for="(c,index) in person" :class="{checked:index===n}" @click="changePerson(index)">{{c}}</label>
                            </div>
                            <div v-if="n===1">
                                <label class="people">
                                    <input type="number" placeholder="最大人数"/>
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>面向人群:</td>
                        <td>
                            <label>
                                <select>
                                    <option v-for="value in forPeople" v-bind:key="value"  v-bind:value="value">{{value}}</option>
                                </select>
                            </label>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
        <div class="Introduction">
            比赛介绍

        </div>
    </div>
</template>

<script>
    export default {
        name: "CompetitionInformation",
        data(){
            return{
                n:0,
                organizer:"Cebo小程序官方",
                person:["单人","多人"],
                forPeople:["无限制","在校大学生"]
            }
        },
        methods:{
            changePerson(index){
                this.n=index;
            },
        }
    }
</script>

<style scoped>
    .competition{
        position: relative;
        float: left;
        left: 2vw;
    }
    .competition tr{
        position: relative;
        height: 8vh;
        line-height: 8vh;
    }
    .competition tr td{
        text-align: left;
    }
    .competition input{
        position: relative;
        height: 4vh;
        width: 12vw;
        left: 1vw;
        outline: none;
        border: none;
        border-radius: 0.2vw;
        padding-left: 0.2vw;
        font-size: 0.8vw;
    }
    .competition .time input{
        height: 4vh;
        width: 8vw;
    }
    .competition select{
        position: relative;
        height: 4vh;
        width: 4vw;
        left: 1vw;
        outline: none;
        border: none;
        border-radius: 0.2vw;
        padding-left: 0.2vw;
        font-size: 0.8vw;
    }
    .people input{
        position: relative;
        width: 4vw;
        left: 1vw;
        padding-left: 0.3vw;
    }
    .persons{
        position: relative;
        float: left;
    }
    .persons label{
        position: relative;
        margin-left: 1vw;
        border-radius: 0.2vw;
    }
    .persons .checked{
        background-color: beige;
        padding: 1vh;
    }

</style>