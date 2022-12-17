import * as B from "babylonjs";
import Ammo from "ammojs-typed";
import "regenerator-runtime/runtime";
import { scene, engine } from "./scene";
import { makeGround } from "./meshes/ground";
import { makeCube } from "./meshes/cube";

async function main(): Promise<void> {
  const ammo = await Ammo();
  const physics: B.AmmoJSPlugin = new B.AmmoJSPlugin(true, ammo);
  scene.enablePhysics(new B.Vector3(0, -9.81, 0), physics);

  makeCube();
  makeGround();

  engine.runRenderLoop(function () {
    scene.render();
  });
}

main();
