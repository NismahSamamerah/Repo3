function excuteafterTTL(callback ,TTL ,par){
    console.log('excuteafterTTL');
    TTL();
    callback(par);

}
excuteafterTTL()