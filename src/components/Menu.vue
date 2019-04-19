<template>
	<el-row>
		<el-menu
		class = "side-menu"
		:default-active="activeMenu"
		>
			<el-submenu index="1">
				 <template slot="title">
					<i class="el-icon-location"></i>
					<span>导航一</span>
					<el-menu-item-group>
						<template slot="title">分组一</template>
						<el-menu-item index="1-1">选项1</el-menu-item>
						<el-menu-item index="1-2">选项2</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="分组2">
						<el-menu-item index="1-3">选项3</el-menu-item>
					</el-menu-item-group>
					<el-submenu index="1-4">
						<template slot="title">选项4</template>
						<el-menu-item index="1-4-1">选项1</el-menu-item>
					</el-submenu>
				</template>
			</el-submenu>
		</el-menu>
	</el-row>
</template>

<script>
	export default {
		data(){
			return {
				activeMenu:"1",
				activeSubMenu:"1"
			}
		},
	}
</script>

<style>
	.side-menu{
		position: fixed;
		top: 60px;
		bottom: 0px;
		width: 100%;
		
	}
</style>
