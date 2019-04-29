/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-01-07 09:25:12
 * 自定义过滤器，或许有用
 */
Vue.filter('date',function(time){
	let oDate=new Date(time*1000);
	//应该在年月日时分秒前面是否加0做判断
	return oDate.getFullYear()+'-'+(oDate.getMoth()+1)+'-'+oData.getDate()
			+' '+oDate.getHours()+':'oDate.getMinutex()+':'+oDate.getSeconds();
})
/*
局部过滤器
filters:{
date(){
	let oDate=new Date(time*1000);
	//应该在年月日时分秒前面是否加0做判断
	return oDate.getFullYear()+'-'+(oDate.getMoth()+1)+'-'+oData.getDate()
			+' '+oDate.getHours()+':'oDate.getMinutex()+':'+oDate.getSeconds();
}
}
*/