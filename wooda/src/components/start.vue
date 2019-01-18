<template>
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
          <div v-for="post in posts" v-bind:key="post.id">
          <td><img v-bind:src="imagePath"/>{{post.name}}</td><!--코인명-->
          <td style="width:80px;">{{post.symbol}}</td> <!--화폐단위-->
          <td>{{post.circulating_supply}}</td><!--가용공급량-->
          <td style="width:100px;">{{post.quotes.USD.price}}</td><!--실시간시세-->
          <td>{{post.quotes.USD.volume_24h}}</td><!--거래량(최근24시간)-->
          <td>{{post.quotes.USD.percent_change_1h}}%</td><!--최근 1시간 변동률-->
          <td>{{post.quotes.USD.percent_change_24h}}%</td><!--최근 24시간 변동률-->
          <td>{{post.quotes.USD.percent_change_7d}}%</td><!--최근 일주일 변동률-->
          <td style="width:170px;">{{post.last_updated}}<span id="i_result"></span></td><!--마지막업데이트-->
             </div>
        </tr>
     </tbody>
        </table>
   
     
      
     <!-- {{ posts[1].name }}
      {{ posts[1].id }}-->
    
  </div>
     </v-layout>
  </v-container>
</template>

</template>

<script>
import sugar from 'sugar'
export default {
  name: 'app',
  data: function () {
    return {
      posts: []
    }
  },
  methods: {
    searchTerm: function () {
      const baseURI = 'https://api.coinmarketcap.com/v2/ticker/?convert=KRW&limit=10&sort=volume_24h';
      this.$axios.get(`${baseURI}`)
      .then((result) => {
        console.log(result)
        var idAry = [ '1', '2','52','825','1027','1376','1684','1765','1831','1958'];
        
        for(var i=0; i<idAry.length; i++) {
        var dat = (result.data.data[idAry[i]]);
          dat.circulating_supply = sugar.Number.format(dat.circulating_supply)
          dat.quotes.USD.price = sugar.Number.format(dat.quotes.USD.price,3)
          dat.quotes.USD.volume_24h = sugar.Number.metric(parseInt(dat.quotes.USD.volume_24h))
          dat.quotes.USD.percent_change_1h = sugar.Number.ceil(dat.quotes.USD.percent_change_1h,4)
          dat.quotes.USD.percent_change_24h = sugar.Number.ceil(dat.quotes.USD.percent_change_24h,4)
          dat.quotes.USD.percent_change_7d = sugar.Number.ceil(dat.quotes.USD.percent_change_7d,4)
          dat.last_updated = this.thistime(dat.last_updated);
                       
        // console.log(sugar.Number.metric(parseInt(dat.quotes.USD.volume_24h)));
        }
        
        this.posts = result.data.data
        
    
       
        
      })
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
      imagePath: './images/error.png',
};
    }
  },
        mounted(){
          this.searchTerm();
          //console.log(sugar.Number.format(56782, 3));
          
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