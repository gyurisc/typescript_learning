/// <reference types="@types/google.maps" />
import { Company } from './Company';
import { User } from './User';

interface Mappable {
    location: {
        lat: number;
        lng: number;
    }
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            center: { lat: 0, lng: 0 },
            zoom: 2
        });
    }

    addMarker(mappable: Mappable): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
    }
}