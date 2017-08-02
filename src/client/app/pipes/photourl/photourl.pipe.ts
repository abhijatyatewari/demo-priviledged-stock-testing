import { Pipe, PipeTransform } from '@angular/core';

const IMAGES_BASE_URL: string = 'assets/images/people';
const IMAGE_FORMAT: string = 'JPG';
const PIPE_DECLARATION = {
    name: 'photoUrl'
};

@Pipe(PIPE_DECLARATION)
class PhotoUrlPipe implements PipeTransform {
    transform(bindingValue: any, ...args: any[]): string {
        let photoUrl: string = '';

        if (bindingValue) {
            photoUrl = `${IMAGES_BASE_URL}/Customer${bindingValue}.${IMAGE_FORMAT}`;
        }

        return photoUrl;
    }
}

export default PhotoUrlPipe;
