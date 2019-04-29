<template>
	<div class="tab-block">
		<el-tag 
		:class="{'active-tab':(item.router==$route.path)}" 
		@click="$router.push(item.router)" 
		v-for="item in tabDatas"
		closable 
		:key="item.router" 
		@close="closeTab(item)"
		>{{item.text}}</el-tag>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				activeTab:""
			}
		},
		computed:{
			tabDatas(){
				return this.$store.state.tabArray;
			}
		},
		methods:{
			changeTab(){
				
			},
			closeTab(value){
				let tabDatas = this.$store.state.tabArray;
				let index = 0;
				for(let i = 0; i < tabDatas.length; i++){
					if(value.router == tabDatas[i].router){
						index = i;
						break;
					}
				}
				tabDatas.splice(index,1);
				if(this.$route.path == value.router){
					if(index == tabDatas.length){
						this.$router.push(tabDatas[index-1].router);
					}else{
						this.$router.push(tabDatas[index].router);
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	.tab-block{
		width: 100%;
		padding: 5px;
		background-color: white;
	}
	.el-tag{
		margin-right: 10px;
		transition: background-color 0.3s ease;
		&:hover{
			cursor: pointer;
			background-color: rgba(112, 147, 183, 0.3);
		}
	}
	.active-tab{
		background-color: #409EFF;
		color:#FFFFFF;
		transition: background-color 0.3s ease;
		i{
			color:#FFFFFF !important;
		}
		&:hover{
			background-color: #409EFF;
		}
	}
</style>
