<template>
    <div style=" background-color: #ddd; margin: 10px; padding: 10px;">
        <el-form>
            <el-form-item label="X"><el-input v-model="_x" placeholder="x"></el-input> </el-form-item>
            <el-form-item label="Y"><el-input v-model="_y" placeholder="y"></el-input> </el-form-item>
            <el-form-item label="Z"><el-input v-model="_z" placeholder="z"></el-input> </el-form-item>
            <el-form-item label="经度带"><el-input v-model="_min_lon" placeholder="min_lon"></el-input></el-form-item>
            <el-button @click="convertXYZ2Location">转换为经纬度</el-button>
        </el-form>
        <p>{{ _result }}</p>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getCoordinateByBJ54 } from '../cord4j'
const _x = ref(4336304.1614)
const _y = ref(515013.6283)
const _z = ref(923.1965)
const _min_lon = ref(109.1)

const _result = ref('')

const convertXYZ2Location = function () {
    const x = parseFloat('' + _x.value)
    const y = parseFloat('' +_y.value)
    const z = parseFloat('' + _z.value)
    const min_lon = _min_lon.value
    console.log('min_lon, x,y,z :>> ', min_lon, x,y,z);
    const result = getCoordinateByBJ54(min_lon, x,y,z)
    _result.value = `经度: ${result[0]}     维度: ${result[1]}     高度: ${result[2]}`

}
</script>