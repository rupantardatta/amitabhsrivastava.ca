import json
from pathlib import Path
from datetime import datetime

ROOT = Path(__file__).resolve().parent.parent
MEDIA_DIR = ROOT / "media"
JSON_OUTPUT_PATH = ROOT / "gallery-data.json"
JS_OUTPUT_PATH = ROOT / "gallery-data.js"

IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"}
VIDEO_EXTENSIONS = {".mp4", ".mov", ".webm", ".avi", ".mkv"}
SUPPORTED_EXTENSIONS = IMAGE_EXTENSIONS | VIDEO_EXTENSIONS


def get_media_type(file_name: str) -> str:
    extension = Path(file_name).suffix.lower()
    if extension in IMAGE_EXTENSIONS:
        return "image"
    if extension in VIDEO_EXTENSIONS:
        return "video"
    return "unknown"


def collect_media_files(directory: Path) -> list[dict]:
    if not directory.exists():
        return []

    items: list[dict] = []
    for path in sorted(directory.rglob("*")):
        if not path.is_file():
            continue

        if path.suffix.lower() not in SUPPORTED_EXTENSIONS:
            continue

        stat = path.stat()
        items.append(
            {
                "name": path.name,
                "path": path.relative_to(ROOT).as_posix(),
                "type": get_media_type(path.name),
                "modifiedAt": datetime.fromtimestamp(stat.st_mtime).isoformat(),
            }
        )

    items.sort(key=lambda item: item["modifiedAt"], reverse=True)
    return items


media_files = collect_media_files(MEDIA_DIR)
JSON_OUTPUT_PATH.write_text(json.dumps(media_files, indent=2) + "\n", encoding="utf-8")
JS_OUTPUT_PATH.write_text("window.galleryMedia = " + json.dumps(media_files, indent=2) + ";\n", encoding="utf-8")
print(f"Wrote {len(media_files)} media file(s) to {JSON_OUTPUT_PATH.relative_to(ROOT)} and {JS_OUTPUT_PATH.relative_to(ROOT)}")
