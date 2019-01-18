<template v-if="datas">

<v-container>
    <v-layout
      text-xs-center
      wrap
    >
  <div id="app">

   
      
        <table align="center">
          
          <thead>
        <tr id="th">
          <div>
          <th>코인명</th>
          <th style="width:80px;">화폐단위</th>
          <th>가용공급량</th>
          <th style="width:100px;">실시간시세</th>
          <th>거래량<br>(최근24시간)</th>
          <th>최근 1시간 <br>변동률</th>
          <th>최근 24시간 <br>변동률</th>
          <th>최근 일주일 <br>변동률</th>
          <th style="width:170px;">마지막업데이트</th>
          </div>
        </tr>
          </thead>
          <tbody>
        <tr id="td">
          <div v-for="data in datas" v-bind:key="data.id">
          <td><!--img v-bind:src=""/-->{{data.name}}</td><!--코인명-->
          <td style="width:80px;">{{data.symbol}}</td> <!--화폐단위-->
          <td>{{data.circulating_supply}}</td><!--가용공급량-->
          <td style="width:100px;">{{data.quotes.USD.price}}</td><!--실시간시세-->
          <td>{{data.quotes.USD.volume_24h}}</td><!--거래량(최근24시간)-->
          <td>{{data.quotes.USD.percent_change_1h}}%</td><!--최근 1시간 변동률-->
          <td>{{data.quotes.USD.percent_change_24h}}%</td><!--최근 24시간 변동률-->
          <td>{{data.quotes.USD.percent_change_7d}}%</td><!--최근 일주일 변동률-->
          <td style="width:170px;">{{data.last_updated}}<span id="i_result"></span></td><!--마지막업데이트-->
             </div>
        </tr>
     </tbody>
        </table>

  </div>
    </v-layout>
</v-container>
</template>

<script>
import sugar from 'sugar'
import numfm from 'numeral'
export default {
  name: 'app',
  data: function () {
    return {
      posts: [],
      datas: [],
      idAry: [],
      ida:[]
    }
  },
  mounted(){
      const baseURI = 'https://api.coinmarketcap.com/v2/ticker/?convert=KRW&limit=10&sort=volume_24h';
      this.$axios.get(`${baseURI}`)
      .then((result) => {
        //console.log(result)
      
        this.datas = result.data.data;
      
        this.searchTerm();
      })
  },
  methods: {
    searchTerm: function () {
      
      //console.log(this.datas);
  for (const key in this.datas) {       
          this.idAry.push(key);         
        } 
       
        for (var s = 0; s <= 9; s++) {
          this.ida[s]=this.datas[this.idAry[s]]
          this.ida[s].circulating_supply = sugar.Number.format(this.ida[s].circulating_supply)
          this.ida[s].quotes.USD.price = sugar.Number.format(this.ida[s].quotes.USD.price,3)
          this.ida[s].quotes.USD.volume_24h = sugar.Number.metric(parseInt(this.ida[s].quotes.USD.volume_24h))
          this.ida[s].quotes.USD.percent_change_1h = sugar.Number.ceil(this.ida[s].quotes.USD.percent_change_1h,2)
          this.ida[s].quotes.USD.percent_change_24h = sugar.Number.ceil(this.ida[s].quotes.USD.percent_change_24h,2)
          this.ida[s].quotes.USD.percent_change_7d = sugar.Number.ceil(this.ida[s].quotes.USD.percent_change_7d,4)
          this.ida[s].last_updated = this.thistime(this.ida[s].last_updated);      
        }         
          //this.posts = result.data.data            
    },
    thistime(e){
        var timestamp = e * 1000;
        var date = new Date(timestamp);          
        var yyyy = date.getFullYear().toString();                                   
        var mm = sugar.Number.pad((date.getMonth()+1).toString(),2) // getMonth() is zero-based        
        var dd  = sugar.Number.pad(date.getDate().toString(),2)            
        var HH  = sugar.Number.pad(date.getHours().toString(),2)            
        var mmm  = sugar.Number.pad(date.getMinutes().toString(),2)
        var ss = sugar.Number.pad(date.getSeconds().toString(),2)       
        
        return yyyy+"-"+mm+"-"+dd+" "+HH+":"+mmm+":"+ss
    },
    coinico(e){
      var model = {
      message: 'v-bind',
};
    }
  },
      
}
</script>




<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  margin: 0px auto;
  margin-top: 40px;

}

th{
width:130px;
padding:2px 0 10px 0;
background-color: #B2EBF4;
color: #000;
vertical-align: middle;
}
td{
width:130px;
padding:2px 0 10px 0;
}
td:nth-child(odd) {
  background-color: #FAFFFF;
}
img #ico{
  width: 20px;
  height: 20px;
}
</style>