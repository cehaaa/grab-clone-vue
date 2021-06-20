<template>
	<div>		
		

		<grab-header></grab-header>

		<router-view></router-view>

		<grab-footer></grab-footer>

		<grab-copyright></grab-copyright>

	</div>
</template>

<script>
export default {

	components : {
		'grab-header' : ()=> import('@/components/Header'),
		'grab-footer' : ()=> import('@/components/Footer'),
		'grab-copyright' : ()=> import('@/components/Copyright')
	}

}
</script>

<style>

</style>