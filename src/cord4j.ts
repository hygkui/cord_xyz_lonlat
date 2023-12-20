// const proj4 = require("proj4");
import proj4 from 'proj4'

// 73-135
const projInfoMap: any = {
    'beijing54': {
        EPSG: '4214',
        proj: '+proj=longlat +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +no_defs +type=crs',
        signed: 0,
    },
    'wgs84': {
        EPSG: '4326',
        proj: proj4('EPSG:4326'),
        signed: 0
    },
    'beijing54_75': {
        EPSG: '2401',
        proj: '+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=25500000 +y_0=0 +ellps=krass +towgs84=12.646,-155.176,-80.863,0,0,0,0 +units=m +no_defs +type=crs',
        signed: 25
    },
    'beijing54_78': {
        EPSG: '2402',
        proj: '+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=26500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs +type=crs',
        signed: 26
    },
    'beijing54_81': {
        EPSG: '2403',
        proj: '+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=27500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs +type=crs',
        signed: 27
    },
    'beijing54_84': {
        EPSG: '2404',
        proj: '+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=28500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs +type=crs',
        signed: 28
    },
    'beijing54_87': {
        EPSG: '2405',
        proj: '+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=29500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs +type=crs',
        signed: 29
    },
    'beijing54_90': {
        EPSG: '2406',
        proj: '+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=30500000 +y_0=0 +ellps=krass +towgs84=12.646,-155.176,-80.863,0,0,0,0 +units=m +no_defs +type=crs',
        signed: 30
    },
    'beijing54_93': {
        EPSG: '2407',
        proj: '+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=31500000 +y_0=0 +ellps=krass +towgs84=12.646,-155.176,-80.863,0,0,0,0 +units=m +no_defs +type=crs',
        signed: 31
    },
    'beijing54_96': {
        EPSG: '2408',
        proj: '+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=32500000 +y_0=0 +ellps=krass +towgs84=12.646,-155.176,-80.863,0,0,0,0 +units=m +no_defs +type=crs',
        signed: 32
    },
    'beijing54_99': {
        EPSG: '2409',
        proj: '+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=33500000 +y_0=0 +ellps=krass +towgs84=12.646,-155.176,-80.863,0,0,0,0 +units=m +no_defs +type=crs',
        signed: 33
    },
    'beijing54_102': {
        EPSG: '2410',
        proj: '+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=34500000 +y_0=0 +ellps=krass +towgs84=12.646,-155.176,-80.863,0,0,0,0 +units=m +no_defs +type=crs',
        signed: 34
    },
    'beijing54_105': {
        EPSG: '2411',
        proj: '+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=35500000 +y_0=0 +ellps=krass +towgs84=12.646,-155.176,-80.863,0,0,0,0 +units=m +no_defs +type=crs',
        signed: 35
    },
    'beijing54_108': {
        EPSG: '2412',
        proj: '+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=36500000 +y_0=0 +ellps=krass +towgs84=11.911,-154.833,-80.079,0,0,0,0 +units=m +no_defs +type=crs',
        signed: 36
    },
    'beijing54_111': {
        EPSG: '2413',
        proj: '+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=37500000 +y_0=0 +ellps=krass +towgs84=31.4,-144.3,-74.8,0,0,0.814,-0.38 +units=m +no_defs +type=crs',
        signed: 37
    },
    'beijing54_114': {
        EPSG: '2414',
        proj: '+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=38500000 +y_0=0 +ellps=krass +towgs84=31.4,-144.3,-74.8,0,0,0.814,-0.38 +units=m +no_defs +type=crs',
        signed: 38
    },
    'beijing54_117': {
        EPSG: '2415',
        proj: '+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=39500000 +y_0=0 +ellps=krass +towgs84=31.4,-144.3,-74.8,0,0,0.814,-0.38 +units=m +no_defs +type=crs',
        signed: 39
    },
    'beijing54_120': {
        EPSG: '2416',
        proj: '+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=40500000 +y_0=0 +ellps=krass +towgs84=15.53,-113.82,-41.38,0,0,0.814,-0.38 +units=m +no_defs +type=crs',
        signed: 40
    },
    'beijing54_123': {
        EPSG: '2417',
        proj: '+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=41500000 +y_0=0 +ellps=krass +towgs84=15.53,-113.82,-41.38,0,0,0.814,-0.38 +units=m +no_defs +type=crs',
        signed: 41
    },
    'beijing54_126': {
        EPSG: '2418',
        proj: '+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=42500000 +y_0=0 +ellps=krass +towgs84=12.646,-155.176,-80.863,0,0,0,0 +units=m +no_defs +type=crs',
        signed: 42
    },
    'beijing54_129': {
        EPSG: '2419',
        proj: '+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=43500000 +y_0=0 +ellps=krass +towgs84=12.646,-155.176,-80.863,0,0,0,0 +units=m +no_defs +type=crs',
        signed: 43
    },
    'beijing54_132': {
        EPSG: '2420',
        proj: '+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=44500000 +y_0=0 +ellps=krass +towgs84=12.646,-155.176,-80.863,0,0,0,0 +units=m +no_defs +type=crs',
        signed: 44
    },
    'beijing54_135': {
        EPSG: '2421',
        proj: '+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=45500000 +y_0=0 +ellps=krass +towgs84=12.646,-155.176,-80.863,0,0,0,0 +units=m +no_defs +type=crs',
        signed: 45
    },
    'beijing54_138': {
        EPSG: '2422',
        proj: '+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=12.646,-155.176,-80.863,0,0,0,0 +units=m +no_defs +type=crs',
        signed: 46
    },
}

// 根据经度获取3度带分带号
function _getSignedByLon(lon: number) {
    for(let i=-177;i<180;i+=3) {
        if(lon === i) {
            return lon
        }
        const cur = Math.abs(lon - i)
        if(cur < 3) {
            const next = Math.abs(i + 3 - lon)
            if(cur > next) {
                if(i+3 === 180) {
                    return 0
                }
                return i+3
            } else {
                return i
            }
        }
    }
}


function getCoordinate(fromProjInfo: any, toProjInfo: any, x: number,y: number,z: number) {
    return proj4(fromProjInfo.proj, toProjInfo.proj, [fromProjInfo.signed * 10E5 + y, x, z]);
}

/**
 * 北京54投影坐标转wgs84经纬度
 * @param {*} minLon 矿山位置经度
 * @param {*} x 投影坐标x
 * @param {*} y 投影坐标y
 * @param {*} z 高程z
 * @returns 
 */
function getCoordinateByBJ54(minLon: number, x: number, y: number, z: number) {
    const fromProjInfo = projInfoMap['beijing54_'+_getSignedByLon(minLon)]
    const toProjInfo = projInfoMap['wgs84']
    return getCoordinate(fromProjInfo, toProjInfo, x, y, z)
}

/**
 * wgs84经纬度转北京54投影坐标
 * @param {*} minLon 矿山位置经度
 * @param {*} lon 经度
 * @param {*} lat 纬度
 * @param {*} height 高度
 *  
 * @returns 
 */
function getXYZ_bj54 (minLon: number, lon: number, lat: number, height: number) {
    const fromProjInfo = projInfoMap['wgs84']
    const toProjInfo = projInfoMap['beijing54_'+_getSignedByLon(minLon)]
    const [_y, x, z] =  proj4(fromProjInfo.proj, toProjInfo.proj, [lon, lat, height]);
    const y = _y - toProjInfo.signed * 10E5
    return [ x, y, z]
}


export {
    getCoordinateByBJ54,
    getXYZ_bj54
}

