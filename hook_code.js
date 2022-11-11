function anti_ad(activity, activityName) {
    Java.perform(function() {
        var pm = activity.getPackageManager();
        var launcherIntent = pm.getLaunchIntentForPackage(activity.getPackageName());
        var luanchIntent = launcherIntent.getComponent().flattenToString();

        var curIntent = activity.getIntent();
        var curIntentName = curIntent.getComponent().flattenToString();
        if (curIntentName.equals(luanchIntent)) {
            Mainintent = new Intent();
            Mainintent.setClassName(activity, activityName);
            activity.finish();
            activity.startActivity(Mainintent);
            console.log("Start New MainActivity");
        }
    });
    
}

function exe_start(){
    var activityName = "tv.danmaku.bili.MainActivityV2";
    // var activityName = "com.kugou.android.app.MediaActivity"
    var activity = Java.use("android.app.Activity");
    activity.onStart.implementation = function() {

        console.log('onStart: ' + this);
        var pm = this.getPackageManager();
        // console.log("getPackageManager ", pm);
        var launcherIntent = pm.getLaunchIntentForPackage(this.getPackageName());
        var luanchIntentName = launcherIntent.getComponent().flattenToString();
        // console.log("Fetch LaunchActivity ", launcherIntent);

        var curIntent = this.getIntent();
        // console.log("getIntent ", curIntent);
        var curIntentName = curIntent.getComponent().flattenToString();
        // console.log("curIntentName ", curIntentName, "luanchIntentName", luanchIntentName);
        // console.log("equals: ", curIntentName==luanchIntentName);
        if (curIntentName==luanchIntentName) {
            console.log("enter in if condition");
            var Mainintent = launcherIntent;
            console.log("new Intent(): ",Mainintent);
            Mainintent.setClassName(this, activityName);
            console.log("Start New MainActivity mashang kaishi ", Mainintent);
            this.finish();
            this.startActivity(Mainintent);
            console.log("Start New MainActivity");
        }

        this.onStart();
        //public static void SomeClass.init(final Context var0)
        SomeClass.init(this);
}
}


setImmediate(exe_start)