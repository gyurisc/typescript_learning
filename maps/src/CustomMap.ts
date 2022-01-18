/// <reference types="@types/google.maps" />
import { Company } from './Company';
import { User } from './User';

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            center: { lat: 0, lng: 0 },
            zoom: 2
        });
    }

    addUserMarker(user: User): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: user.location.lat,
                lng: user.location.lng
            }
        });
    }

    addCompanyMarker(company: Company): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: company.location.lat,
                lng: company.location.lng
            }
        });
    }

}