<template>
   <div style="background-color: #ccc; margin: 20px; padding: 10px;">
        <el-form>
            <el-form-item label="经度">
                <el-input v-model="_lon" placeholder="x"></el-input>
            </el-form-item>
            <el-form-item label="维度"> 
                <el-input v-model="_lat" placeholder="y"></el-input> 
            </el-form-item>
            <el-form-item label="高度"> 
                <el-input v-model="_h" placeholder="z"></el-input>  
            </el-form-item>
            <el-form-item label="经度带"> 
                <el-input v-model="_min_lon" placeholder="min_lon"></el-input>  
            </el-form-item>
            <el-button @click="convertXYZ2Location">转换为WS84</el-button>
        </el-form>
        <p>{{ _result }}</p>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getXYZ_bj54 } from '../cord4j'
const _lon = ref(108.17413018019352)
const _lat = ref(39.15983924976027)
const _h = ref(923.1965)
const _min_lon = ref(109.1)
const _result = ref('')

const convertXYZ2Location = function () {
    const lon = parseFloat('' + _lon.value)
    const lat = parseFloat('' +_lat.value)
    const h = parseFloat('' + _h.value)
    const min_lon = _min_lon.value
    console.log('min_lon, lon,y,z :>> ', min_lon, lon, lat, h);
    const result = getXYZ_bj54(min_lon, lon, lat, h)
    _result.value = `X: ${result[0]}     Y: ${result[1]}     Z: ${result[2]}`
}
</script>