export default class ImageComponent {
  constructor(element, name) {
    this.element = element;
    this.element.className = 'figure-img img-fluid rounded';
    this.name = name;

    this.figure = document.createElement('figure');
    this.figure.className = 'figure col-6';
    this.figure.appendChild(this.element);
    this.figcaption = document.createElement('figcaption');
    this.figcaption.className = 'figure-caption text-end';
    this.figcaption.textContent = this.name;
    this.figure.appendChild(this.figcaption);

    this.delBtn = document.createElement('button');
    this.delBtn.type = 'button';
    this.delBtn.className = 'btn btn-primary';
    this.delBtn.textContent = 'Delete';
    this.delBtn.addEventListener('click', this.delBtnClickHendler.bind(this));
    this.figure.appendChild(this.delBtn);
  }

  render() {
    return this.figure;
  }

  delBtnClickHendler() {
    if (this.figure.parentNode) {
      this.figure.parentNode.removeChild(this.figure);
    }
  }
}
