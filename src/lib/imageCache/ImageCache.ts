export class ImageCache {
  private subscriptions: Subscription[] = [];
  private cache = new Map<ImageSource, ImageObject>();

  private emit(src: ImageSource, image: ImageObject) {
    const matches = this.subscriptions.filter(sub => sub.src === src);
    for (const sub of matches) {
      sub.emitter(image);
    }
  }

  get(src: ImageSource): ImageObject {
    let image = this.cache.get(src);
    if (!image) {
      image = new Image();
      const emit = () => this.emit(src, image!);
      image.addEventListener('load', emit);
      image.addEventListener('error', emit);
      image.src = src;
      this.cache.set(src, image);
    }
    return image;
  }

  subscribe(src: ImageSource, emitter: ImageEmitter) {
    this.subscriptions.push({ src, emitter });
    return () => this.unsubscribe(src, emitter);
  }

  unsubscribe(src: ImageSource, emitter: ImageEmitter) {
    const index = this.subscriptions.findIndex(
      sub => sub.src === src && sub.emitter === emitter
    );
    if (index !== -1) {
      this.subscriptions.splice(index, 1);
    }
  }
}

type ImageObject = HTMLImageElement;

type ImageSource = string;

type Subscription = {
  src: ImageSource;
  emitter: ImageEmitter;
};

type ImageEmitter = (image: HTMLImageElement) => any;
