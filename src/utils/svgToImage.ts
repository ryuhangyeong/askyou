export default (svgElement: SVGSVGElement | null) => {
  const DOMURL = window.URL || window.webkitURL || window;
  const svg = svgElement?.getBBox();

  const canvas = document.createElement('canvas');
  canvas.width = svg!.width;
  canvas.height = svg!.height;

  const context: CanvasRenderingContext2D | null = canvas.getContext('2d');
  context!.fillStyle = 'white';
  context!.fillRect(0, 0, canvas.width, canvas.height);

  const svgString = domNodeToString(svgElement);

  const image = new Image();
  const svgBlob = new Blob([svgString], {
    type: 'image/svg+xml;charset=utf-8',
  });
  const url = DOMURL.createObjectURL(svgBlob);

  image.src = url;

  image.onload = () => {
    context!.drawImage(image, 0, 0);
    DOMURL.revokeObjectURL(url);
    download();
  };

  function download(): void {
    const link = document.createElement('a');
    link.download = 'mbti.png';
    link.href = canvas.toDataURL();
    link.click();
  }

  function domNodeToString(domNode: SVGSVGElement | null): string {
    const element = document.createElement('div');
    element.appendChild(domNode!.cloneNode(true));
    return element.innerHTML;
  }
};
