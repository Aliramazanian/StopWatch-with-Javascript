that is a easy timer 
first of all we have to write html and css code.
than in typescript we can write dom code
we have to recognize  "second"s and "tens"s value
there are "0"
and we give an act to start, that incredible number in 4 condition code
1. to add second to "0":
when "tens" is grater than 9 become "tens"

  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
2.  when "tens" is grater than 99 "second" start to running 

if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
 3. when "second" is grater than 9 . it would be "second" 
 
 if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }


  "interval" تعریف و کاربرد
متد setInterval()، or intervall
 یک تابع را فراخوانی کرده یا یک عبارت را در یک فاصله زمانی(به میلی ثانیه) ارزیابی می کند.

متد setInterval()، فراخوانی یک تابع را ادامه می دهد تا هنگامی که clearInterval() فراخوانی شود یا اینکه پنجره بسته شود.

از ID برگردانده شده به وسیله ی setInterval()، بعنوان پارامتر برای متد clearInterval() استفاده می شود.

نکته: 1000 میلی ثانیه برابر با 1 ثانیه است.

نکته: برای یک بار اجرا کردن یک تابع، بعد از یک فاصله ی زمانی مشخص به میلی ثانیه، از متد setTimeout() استفاده کنید.
