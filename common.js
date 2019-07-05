$(function(){
    // 時間が一桁の場合、二桁に変換する。その後、文字列に変換
    var toDoubleDigits = function(num) {
        num += "";
        if (num.length === 1) {
            num = "0" + num;
        }
        return num;     
        };
    // 現在時刻の時の値を数字で取得
    var now_hour = new Date().getHours();
    console.log(now_hour)
    // 今日の曜日を数字で取得
    var now_weekday = new Date().getDay();
    console.log(now_weekday)
    // 取得した時を文字列に変換
    var hour = String(now_hour);
    console.log(hour)
    // 現在時刻の分の値を文字列で取得
    var minutes = toDoubleDigits(new Date().getMinutes());
    console.log(minutes)
    // 時と分を合体
    var now_time = hour + minutes
    console.log(now_time)
    // 合体した時と分を数字に変換
    var dt_now = Number(now_time)
    console.log(dt_now)
    
    if (now_weekday == 0 || now_weekday == 6){
        $('.holiday').css('display', 'block');
    }
        // 現在時刻で条件分岐
        if ( 251 <= dt_now && dt_now <= 255){
            $('.hour255').css('bacground', 'pink');
            $('.hour255').css('display', 'block');
        } else if( 000 <= dt_now && dt_now <= 259 ){
            $('.hour0_3').css('background','red');
            $('.hour0_3').css('display', 'block');
            $('.time1').text("←今はここ");
        } else if ( 300 <= dt_now && dt_now <= 529) {
            $('.hour3_5').css('background','blue');
            $('.hour3_5').css('display', 'block');
            $('.time2').text("←今はここ");
        } else if ( 530 <= dt_now && dt_now <= 659) {
            $('.hour5_7').css('background','blue');
            $('.hour5_7').css('display', 'block');
            $('.time3').text("←今はここ");
        } else if ( 700 <= dt_now && dt_now <= 859) {
            $('.hour7_9').css('background','blue');
            $('.hour7_9').css('display', 'block');
            $('.time4').text("←今はここ");
        } else if ( 900 <= dt_now && dt_now <= 1159) {
            $('.hour9_12').css('background','blue');
            $('.hour9_12').css('display', 'block');
            $('.time5').text("←今はここ");
        } else if ( 1200 <= dt_now && dt_now <= 1259) {
            $('.lunchtime').css('background','blue');
            $('.lunchtime').css('display', 'block');
            $('.time6').text("←今はここ");
        } else if ( 1500 <= dt_now && dt_now <= 1515) {
            $('.afternoon_snack').css('background','blue');
            $('.afternoon_snack').css('display', 'block');

        } else if ( 1300 <= dt_now && dt_now <= 1759) {
            $('.hour13_18').css('background','green');
            $('.hour13_18').css('display', 'block');
            $('.time7').text("←今はここ");
        } else if ( 1800 <= dt_now && dt_now <= 1959) {
            $('.hour18_20').css('background','blue');
            $('.hour18_20').css('display', 'block');
            $('.time8').text("←今はここ");
        } else if ( 2000 <= dt_now && dt_now <= 2159) {
            $('.hour20_22').css('background','blue');
            $('.hour20_22').css('display', 'block');
            $('.time9').text("←今はここ");
        } else if ( 2200 <= dt_now && dt_now <= 2354) {
            $('.hour22_24').css('background','yellow');
            $('.hour22_24').css('display','block');
            $('.time10').text("←今はここ");
        } else if( 2355 <= dt_now && dt_now <= 2359 ){
            $('.bedtime').css('background', 'purple');
            $('.bedtime').css('display', 'block');
        }
});
