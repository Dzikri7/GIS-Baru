import { get } from "https://jscroot.github.io/api/croot.js";
import {setInner,addChild } from "https://jscroot.github.io/element/croot.js";

export let URLGeoJson = "https://us-central1-vivid-vent-401501.cloudfunctions.net/function-2";
export let tableTag="tr";
export let tableRowClass="content is-small";
export let tableTemplate=`
<td>#TYPE#</td>
<td>#NAME#</td>
<td>#KORDINAT#</td>
`

export function responseData(results){
    // console.log(results.features);
    // Addlayer()
    results.features.forEach(isiRowPoint);
    results.features.forEach(isiRowPolygon);
    results.features.forEach(isiRowPolyline);
}

export function isiRowPoint(value){
    if (value.geometry.type === "Point") {
    let content=tableTemplate.replace("#TYPE#",value.geometry.type).replace("#NAME#",value.properties.Name).replace("#KORDINAT#",value.geometry.coordinates);
    console.log(content);
    addChild("lokasi",tableTag,tableRowClass,content);
    }
}

export function isiRowPolygon(value){
    if (value.geometry.type === "Polygon") {
    let content=tableTemplate.replace("#TYPE#",value.geometry.type).replace("#NAME#",value.properties.Name).replace("#KORDINAT#",value.geometry.coordinates);
    console.log(content);
    addChild("polygon",tableTag,tableRowClass,content);
    }
}

export function isiRowPolyline(value){
    if (value.geometry.type === "LineString") {
    let content=tableTemplate.replace("#TYPE#",value.geometry.type).replace("#NAME#",value.properties.Name).replace("#KORDINAT#",value.geometry.coordinates);
    console.log(content);
    addChild("line",tableTag,tableRowClass,content);
    }
}

export function Addlayer() {

    function showAlertOnEveryClick() {
        alert("ERROR KOPLOK");
      }
    function getCurrentURL() {
        const currentURL = window.location.href;
        return currentURL;
      }
      
      const currentURL = getCurrentURL();
      console.log(currentURL);
    const allowedDomain = ["https://github.com/Dzikri7/GIS-Baru"];
  
    if (!currentURL.includes(allowedDomain)) {
        showAlertOnEveryClick();
    }
  }