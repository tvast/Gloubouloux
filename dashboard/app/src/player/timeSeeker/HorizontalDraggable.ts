import {Directive, HostListener, Output, EventEmitter , ElementRef} from '@angular/core';

@Directive({
	selector: 'horizontal-draggable'
})
export class HorizontalDraggable {
	@Output('position') position = new EventEmitter();

  private mousedrag :any;

  private mouseup :any  = new EventEmitter();

  private mousedown :any = new EventEmitter();

  private mousemove :any = new EventEmitter();

	@HostListener('mouseup', ['$event'])
	onMouseup(event) {
		this.mouseup.next(event);
	}

	@HostListener('mousedown', ['$event'])
  onMousedown(event) {
		this.mousedown.next(event);
	}

  @HostListener('mousemove', ['$event'])
  onMousemove(event) {
		this.mousemove.next(event);
	}

	constructor(public element: ElementRef) {
		this.element.nativeElement.style.position = 'relative';
		this.element.nativeElement.style.cursor = 'pointer';

		this.mousedrag = this.mousedown
			.map(event => {
				event.preventDefault();
				return {
					left: event.clientX - this.element.nativeElement.getBoundingClientRect().left,
					right: event.clientY - this.element.nativeElement.getBoundingClientRect().top
				}
			})
			.flatMap(imageOffset => this.mousemove.map(pos => ({
				top: pos.clientY - imageOffset.top,
				left: pos.clientX - imageOffset.left
			})))
			.takeUntil(this.mouseup);
	}

	onInit() {
		this.mousedrag.subscribe({
			next: pos => {
				this.element.nativeElement.style.left = pos.left + 'px';
			}
		})
	}

}