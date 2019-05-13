<template>
	<el-menu
	class = "side-menu"
	:router="true"
	background-color="#545c64"
	:default-active="$route.path"
	:unique-opened="true"
	text-color="#fff"
    active-text-color="#ffd04b"
	>
		<el-submenu v-for="item in menuDatas" :index="item.router" :key="item.router" >
			 <template slot="title">
				<i class="el-icon-location"></i>
				<span>{{item.text}}</span>
			</template>
			<template v-if="item.subMenu!=undefined">
				<el-menu-item @click="addTab(subMenu)" v-for="subMenu in item.subMenu" :index="subMenu.router" :key="subMenu.router">{{subMenu.text}}</el-menu-item>
			</template>
		</el-submenu>
	</el-menu>
</template>

<script>
	export default {
		data(){
			return {
				activeMenu:"1",
				activeSubMenu:"1"
			}
		},
		computed:{
			menuDatas(){
				return this.$store.state.menuData;
			}
		},
		methods:{
			addTab(value){
				let tabArray = this.$store.state.tabArray;
				const hasTab = tabArray.some((item,index)=>{
					return item.router == value.router;
				});
				if(!hasTab){
					this.$store.state.tabArray.push(value);
				}
			}
		}
	}
</script>

<style>
	.el-menu {
	  height: 100%;
	}/* 
	.el-submenu .el-menu-item {
	  padding: 0 20px;
	  min-width: 160px;
	  padding-left: 53px !important;
	} */
</style>
