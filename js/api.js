const obj = {
    code: 0,
    message: 'ok',
    data: {
        title: '你知道这首歌居然被这么评论?',
        title1:'河流',
        author: '蛙池',
        duration: '04:00',
        pic: 'https://p1.music.126.net/6ONOvD_6xvqGCOVMoxg-Ow==/109951168592931888.jpg?imageView=1&type=webp&thumbnail=85x0',
        pic1: 'https://p2.music.126.net/FCC5EGTJ5tj3dCVv44ZpSA==/109951164866862132.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0',
        pic2: 'https://p2.music.126.net/FCC5EGTJ5tj3dCVv44ZpSA==/109951164866862132.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0',
        audio: 'images/obj_wonDkMOGw6XDiTHCmMOi_2037564436_90ef_3561_2f31_856fbaa802f039bdbdad026d06910c0e (1).m4a',
        lyric: '[00:00.000] 作词 : 蛙池\n[00:01.000] 作曲 : 蛙池\n[00:32.857]\n[00:48.857]坦白来说 坦白是ok的\n[00:52.609]但说的越多 声音就越弱\n[00:56.347]我在意的 放心里就好了\n[01:01.117]\n[01:04.594]要拐几个弯 幽默才幽默\n[01:08.096]圣殿的漆 已经掉了\n[01:12.088]我买不起的 都没有价格了\n[01:33.848]\n[01:35.593]为什么不愉快接受\n[01:39.339]太阳还是以前那个\n[01:43.100]很闷热 又觉得 这惯性还不错\n[01:50.088]\n[01:51.343]我不拒绝踏进这条河流\n[01:54.848]我应该做的全都做了\n[01:58.853]很温柔 你问我 这水温还ok么？\n[02:22.543]\n[02:38.541]坦白来说 坦白是ok的\n[02:41.798]但说得越多 声音就越弱\n[02:45.794]我在意的 放心里就好了\n[02:52.537]\n[02:53.808]今天的谎 淹没旧的\n[02:57.287]用今天的谎 作明天的被窝\n[03:01.303]睡梦里写的歌  在梦中就忘了\n[03:06.807]\n[03:09.546]为什么不愉快接受\n[03:13.040]太阳还是以前那个\n[03:16.792]很闷热 又觉得 这惯性还不错\n[03:23.542]\n[03:24.801]我不拒绝踏进这条河流\n[03:28.546]我应该做的全都做了\n[03:32.301]很温柔 你问我 这水温还ok么？\n'
    }
}

const API = {
    queryLyric() {
        return new Promise(resolve => {
            setTimeout(
                () => {
                    resolve(obj)
                },
                Math.round(Math.random() * (2000 - 500) + 500)
            )
        })
    }
}