'use client';
import Header from "./Components/Header";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
export default function Home() {
  return (
    <>
      <title>DSSP</title>
      <div className="flex justify-center mb-2">
        <Header/>
      </div>
      <div className="flex flex-col justify-center bg-[#a2a8d3] h-[95vh]">
        <div className="flex justify-center flex-grow">
          <MapContainer className="w-[80%] rounded-[0.25rem] mt-10" center={[31.3909,74.2417]} zoom={12.5}>
                /<TileLayer
                attribution="Google Maps"
                //url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
                url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
                //url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
                maxZoom={20}
                subdomains={["mt0", "mt1", "mt2", "mt3"]}
                />*/
          </MapContainer>
        </div>
        <div>
          <footer className="text-center h-[1rem] text-xs bg-white">developed by @ahmkhn</footer>
        </div>
      </div>
    </>
  );
}
