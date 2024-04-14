#include <Arduboy2.h>
Arduboy2 arduboy;

byte frameBuffer[1024];

bool getPixelState(int y, int x) {
    return frameBuffer[y*128+x];
}

void setup() {
    arduboy.begin();
    arduboy.clear();
    arduboy.allPixelsOn(true);
}

void loop() {
}
