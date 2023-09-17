import { Router } from "express";
import {
  ejercicio2,
  ejercicio3,
  ejercicio4,
  ejercicio5,
  ejercicio6,
  ejercicio7,
  ejercicio8,
  ejercicio9,
  ejercicio10,
  ejercicio11,
  ejercicio12,
  ejercicio13,
  ejercicio14,
  ejercicio15,
  ejercicio16,
  ejercicio17,
  ejercicio18,
  ejercicio19,
  ejercicio20,
  ejercicio21,
} from "../controller/endpoints.controller.js";

const router = Router();

router.use("/ejercicio2", [], ejercicio2);
router.use("/ejercicio3", [], ejercicio3);
router.use("/ejercicio4", [], ejercicio4);
router.use("/ejercicio5", [], ejercicio5);
router.use("/ejercicio6", [], ejercicio6);
router.use("/ejercicio7", [], ejercicio7);
router.use("/ejercicio8", [], ejercicio8);
router.use("/ejercicio9", [], ejercicio9);
router.use("/ejercicio10", [], ejercicio10);
router.use("/ejercicio11", [], ejercicio11);
router.use("/ejercicio12", [], ejercicio12);
router.use("/ejercicio13", [], ejercicio13);
router.use("/ejercicio14", [], ejercicio14);
router.use("/ejercicio15", [], ejercicio15);
router.use("/ejercicio16", [], ejercicio16);
router.use("/ejercicio17", [], ejercicio17);
router.use("/ejercicio18", [], ejercicio18);
router.use("/ejercicio19", [], ejercicio19);
router.use("/ejercicio20", [], ejercicio20);
router.use("/ejercicio21", [], ejercicio21);

export default router;
