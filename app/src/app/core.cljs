(ns app.core
  (:require [goog.dom :as gdom]
            [reagent.dom :as dom]
            [caniusestories-lib :refer [Button]]))

(defn simple-component []
  [:div
   [:p "I am a component!"]
   [:> Button 
    {:primary true
     :label "Roar"}]
   [:p.someclass
    "I have " [:strong "bold"]
    [:span {:style {:color "red"}} " and red "] "text."]])

(dom/render [simple-component] (gdom/getElement "app"))

