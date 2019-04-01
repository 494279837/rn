package com.test;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import android.os.Bundle;
import android.app.Activity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "test";
    }
    @Override
        protected ReactActivityDelegate createReactActivityDelegate() {
            return new MyReactDelegate(this,getMainComponentName());
        }

    //自定义MyReactDelegate
    class  MyReactDelegate extends ReactActivityDelegate {

       public MyReactDelegate(Activity activity, @javax.annotation.Nullable String mainComponentName) {
           super(activity, mainComponentName);
       }

       @javax.annotation.Nullable
       @Override
       protected Bundle getLaunchOptions() {
           Bundle bundle = new Bundle();
           //传递环境参数IS_ENV给JS
           bundle.putString("IS_ENV",BuildConfig.IS_ENV);
           return bundle;
       }
    }
}
