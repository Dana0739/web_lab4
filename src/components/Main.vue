<template>
    <div id="main">
        <div id="header">
            <p>{{msg}}</p>
            <button class="btn-primary" v-on:click="submitLogout">Logout</button>
        </div>
        <div id="input">
            <form id="inputForm">
                <table id="inputTable">
                    <tr>
                        <td id="label-x">
                            X: {{ x }}
                        </td>
                        <td>
                            <input type="radio" value="-5" v-model="x" id="x-5">
                            <label for="x-5">-5</label>
                            <input type="radio" value="-4" v-model="x" id="x-4">
                            <label for="x-4">-4</label>
                            <input type="radio" value="-3" v-model="x" id="x-3">
                            <label for="x-3">-3</label>
                            <input type="radio" value="-2" v-model="x" id="x-2">
                            <label for="x-2">-2</label>
                            <input type="radio" value="-1" v-model="x" id="x-1">
                            <label for="x-1">-1</label>
                            <input type="radio" value="0" v-model="x" id="x0">
                            <label for="x0">0</label>
                            <input type="radio" value="1" v-model="x" id="x1">
                            <label for="x1">1</label>
                            <input type="radio" value="2" v-model="x" id="x2">
                            <label for="x2">2</label>
                            <input type="radio" value="3" v-model="x" id="x3">
                            <label for="x3">3</label>
                        </td>
                    </tr>
                    <tr>
                        <td id="label-y">
                            <label for="y">Y:</label>
                        </td>
                        <td>
                            <input type="text" id="y" pattern="^-?((([0-4](\.[0-9]{1,5})?))|5)$" v-model="y">
                        </td>
                    </tr>
                    <tr>
                        <td id="label-r">
                            R: {{ r }}
                        </td>
                        <td>
                            <input type="radio" value="-5" v-model="r" id="r-5" disabled>
                            <label for="r-5">-5</label>
                            <input type="radio" value="-4" v-model="r" id="r-4" disabled>
                            <label for="r-4">-4</label>
                            <input type="radio" value="-3" v-model="r" id="r-3" disabled>
                            <label for="r-3">-3</label>
                            <input type="radio" value="-2" v-model="r" id="r-2" disabled>
                            <label for="r-2">-2</label>
                            <input type="radio" value="-1" v-model="r" id="r-1" disabled>
                            <label for="r-1">-1</label>
                            <input type="radio" value="0" v-model="r" id="r0" disabled>
                            <label for="r0">0</label>
                            <input type="radio" value="1" v-model="r" id="r1">
                            <label for="r1">1</label>
                            <input type="radio" value="2" v-model="r" id="r2">
                            <label for="r2">2</label>
                            <input type="radio" value="3" v-model="r" id="r3">
                            <label for="r3">3</label>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <button v-on:click="submitData">submit</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>

        <div id="plot">
            <svg id="svg_plot" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 300 300"
                 v-on:click="plotClicked">
                <title>Plot</title>

                <rect class="cls-1" x="150" y="30" width="60" height="120"></rect>
                <path class="cls-1" d="M150,270V150H30A119.992,119.992,0,0,0,150,270Z"></path>
                <polygon class="cls-1" points="150 270 150 150 210 150 150 270"></polygon>

                <line class="cls-2" x1="150" y1="300" x2="150" y2="5.295"></line>
                <polygon points="150 0 153.049 7.462 150 5.691 146.952 7.462 150 0"></polygon>
                <line class="cls-2" y1="150.052" x2="294.705" y2="149.95"></line>
                <polygon points="300 149.948 292.539 153 294.309 149.95 292.537 146.902 300 149.948"></polygon>
                <path class="cls-3" d="M90.02,150l-.02.02V150Z" transform="translate(0 0)"></path>
                <line class="cls-2" x1="210" y1="154" x2="210" y2="146"></line>
                <line class="cls-2" x1="154" y1="210" x2="146" y2="210"></line>
                <line class="cls-2" x1="154" y1="90" x2="146" y2="90"></line>
                <line class="cls-2" x1="90" y1="154" x2="90" y2="146"></line>
                <line class="cls-2" x1="154" y1="270" x2="146" y2="270"></line>
                <line class="cls-2" x1="270" y1="154" x2="270" y2="146"></line>
                <line class="cls-2" x1="154" y1="30" x2="146" y2="30"></line>
                <line class="cls-2" x1="30" y1="154" x2="30" y2="146"></line>

                <line id="frame-top" class="frame" x1="-90" y1="-210" x2="390" y2="-210"></line>
                <line id="frame-bot" class="frame" x1="-90" y1="750" x2="390" y2="750"></line>
                <line id="frame-left" class="frame" x1="-90" y1="-210" x2="-90" y2="750"></line>
                <line id="frame-right" class="frame" x1="390" y1="-210" x2="390" y2="750"></line>
                <!--<rect id="frame" x="30" y="30" width="240" height="240"/>-->


                <text class="cls-4" transform="translate(30 143)">-
                    <tspan>{{r}}</tspan>
                </text>
                <text class="cls-4" transform="translate(154 267)">-
                    <tspan>{{r}}</tspan>
                </text>
                <text class="cls-4" transform="translate(263 143)">
                    <tspan>{{r}}</tspan>
                </text>
                <text class="cls-4" transform="translate(154 25)">
                    <tspan>{{r}}</tspan>
                </text>
                <text class="cls-4 divis" transform="translate(154 207)">-
                    <tspan>{{r / 2}}</tspan>
                </text>
                <text class="cls-4 divis" transform="translate(154 85)">
                    <tspan>{{r / 2}}</tspan>
                </text>
                <text class="cls-4 divis" transform="translate(210 143)">
                    <tspan>{{r / 2}}</tspan>
                </text>
                <text class="cls-4 divis" transform="translate(69 143)">-
                    <tspan>{{r / 2}}</tspan>
                </text>
                <text class="cls-5" transform="translate(158 13)">Y</text>
                <text class="cls-5" transform="translate(289 143)">X</text>
                    <circle v-for="{id, x, y, inArea, r} in resultData" :key="id" :cx="convertX(x)"
                            :cy="convertY(y)" r="3" :fill="pointColor(inArea)"
                            strokeWidth="1" stroke="black"
                            :fillOpacity="r"></circle>
            </svg>
        </div>

        <div id="result">
            <table id="resultsTable">
                <tr>
                    <td>
                        <p>X</p>
                    </td>
                    <td>
                        <p>Y</p>
                    </td>
                    <td>
                        <p>R</p>
                    </td>
                    <td>
                        <p>Success</p>
                    </td>
                </tr>
                <tr v-for="{x, y, inArea, r} in resultData">
                    <td>{{x}}</td>
                    <td>{{y}}</td>
                    <td>{{r}}</td>
                    <td>{{inArea}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<style src="../css/Main.css"></style>

<script>
    import axios from 'axios';
    import router from '../router';
    import "../css/Main.css";

    export default {
        name: "Main",
        props: ['store'],
        data: () => ({
            msg: 'Lab4 Zhetesova p3217 v.28705',
            x: 0,
            y: 0,
            r: 1,
            resultData: [{x: 2, y: 3, r: 1, inArea: true}, {x: 3, y: 1, r: 1, inArea: true}, {x: 1, y: 1, r: 1, inArea: true}]
        }),
        mounted() {
            this.init();
        },
        methods: {
            pointColor: (inArea) => {
                return inArea?'#00ff00':'#ff0000';
            },

            submitLogout: function () {
                axios({
                    method: 'get',
                    url: 'http://localhost:8080/WebLab4_t-1.0-SNAPSHOT/api/users/logout',
                    withCredentials: true
                }).then(response => {
                    if (response.data.success === true) {
                        this.store.setAuthorised(false);
                        router.push({
                            name: 'Login'
                        });
                    }
                }).catch(err => {
                    console.log(err);
                })
            },

            submitData: function () {
                if (this.validatePoint()) {
                    axios({
                        method: 'get',
                        url: 'http://localhost:8080/WebLab4_t-1.0-SNAPSHOT/api/points/add?x=' + this.x
                            + "&y=" + this.y + "&r=" + this.r,
                        withCredentials: true
                    }).then(response => {
                        if (response.data.success === true) {
                            this.resultData = response.data.points;
                        }
                    }).catch(err => {
                        console.log(err);
                    })
                }
            },

            init: function () {
                axios({
                    method: 'get',
                    url: 'http://localhost:8080/WebLab4_t-1.0-SNAPSHOT/api/points/all',
                    withCredentials: true
                }).then(response => {
                    if (response.data.success === true) {
                        this.resultData = response.data.points;
                    }
                }).catch(err => {
                    console.log(err);
                })
            },

            plotClicked: function(event) {
                this.x = this.convertXReverse(+event.offsetX).toFixed(5);
                this.y = this.convertYReverse(+event.offsetY).toFixed(5);
                this.submitData();
            },

            convertX: function (x) {
                return 120 * x / this.r + 150;
            },

            convertY: function (y) {
                return 150 - 120 * y / this.r;
            },

            convertXReverse: function (cx) {
                return (cx - 225) * +this.r / 175;
            },

            convertYReverse: function (cy) {
                return (cy - 225) * +this.r / -175;
            },

            validatePoint: function () {
                return (this.x <= 3 && this.x >= -5 && this.y <= 5 && this.y >= -5);
            }
        }
    }

</script>

<style>
    .cls-2 {
        fill: none;
    }

    .cls-2, .cls-3 {
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: 0.5px;
    }

    .cls-4 {
        font-size: 12px;
    }

    .cls-4, .cls-5 {
        font-family: MyriadPro-Regular, Myriad Pro, serif;
    }

    .cls-5 {
        font-size: 14px;
    }

    #svg_plot {
        background: white;
        border-radius: 4px;
        border: 1px solid hsl(0, 0%, 80%);
        cursor: crosshair;
        padding: 10px;
        width: 430px;
        height: 430px;
    }

    .cls-1, .cls-3 {
        fill: aqua;
    }

    .cls-2 {
        fill: none;
    }

    .cls-2, .cls-3 {
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: 0.5px;
    }

    .cls-4 {
        font-size: 12px;
    }

    .cls-4, .cls-5 {
        font-family: MyriadPro-Regular, Myriad Pro, serif;
    }

    .cls-5 {
        font-size: 14px;
    }

    .frame {
        stroke: red;
        stroke-width: 1px;
        stroke-miterlimit: 10;
    }

    #svg_plot > polygon, #svg_plot > path, #svg_plot > rect {
        pointer-events: none;
    }

    input, button, select, optgroup, textarea {
        margin: 4px !important;
    }

    body {
        color: blue !important;
        background-color: aliceblue !important;
    }

    button {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }

    div {
        margin: 10px;
    }

    table {
        border: 1px solid hsl(0, 0%, 80%);
        border-radius: 4px !important;
        -webkit-border-radius: 4px !important;
        -moz-border-radius: 4px !important;
        -khtml-border-radius: 4px !important;
    }

    #resultsTable > tr > td {
        border: 1px solid hsl(0, 0%, 80%);
    }

    #inputTable > tr {
        border: 1px solid hsl(0, 0%, 80%);
    }

    #main {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: 1fr auto;
        justify-items: center;
    }

    #header {
        grid-row: 1;
        grid-column: 1/4;
        margin: 20px;
        font-size: 20px;
    }

    #input {
        grid-column: 1;
        grid-row: 2;
        width: 350px;
        height: 430px;
    }

    #inputForm {
        width: 350px;
        height: 430px;
    }

    #inputTable {
        width: 350px;
        height: 430px;
    }

    #plot {
        grid-column: 2;
        grid-row: 2;
    }

    #result {
        min-width: 270px;
        grid-column: 3;
        grid-row: 2;
    }

    #resultsTable {
        min-width: 270px;
    }

    @media screen and (max-width: 1251px) {
        body {
            background-color: green;
        }

        #main {
            grid-template-columns: auto 1fr 1fr auto;
            grid-template-rows: auto auto auto;
        }

        #header {
            grid-column: 2/4;
            grid-row: 1;
        }

        #input {
            grid-column: 2/4;
            grid-row: 2;
            width: 630px;
            height: 300px;
        }

        #inputForm {
            width: 630px;
            height: 300px;
        }

        #inputTable {
            width: 630px;
            height: 300px;
        }

        #plot {
            grid-column: 2;
            grid-row: 3;
        }

        #result {
            grid-column: 3;
            grid-row: 3;
            min-width: 230px;
            height: 430px;
        }

        #resultsTable {
            min-width: 230px;
            height: 430px;
        }
    }

    @media screen and (max-width: 764px) {
        body {
            background-color: red;
        }

        #main {
            grid-template-columns: 1fr auto 1fr;
            grid-template-rows: auto auto auto auto;
        }

        #header {
            grid-column: 1/4;
            grid-row: 1;
        }

        #input {
            grid-column: 2;
            grid-row: 2;
            height: 300px;
            width: 430px;
        }

        #inputForm {
            height: 300px;
            width: 430px;
        }

        #inputTable {
            height: 300px;
            width: 430px;
        }

        #plot {
            grid-column: 2;
            grid-row: 3;
        }

        #result {
            grid-column: 2;
            grid-row: 4;
            min-height: 20px;
            width: 430px;
        }

        #resultsTable {
            min-width: 430px;
        }
    }
</style>
