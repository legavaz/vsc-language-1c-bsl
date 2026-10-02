import * as assert from "assert";
import * as fs from "fs";
import * as Paths from "path";
import { LANGUAGE_1C_BSL_CONFIG } from "../src/const";

const SETTING_KEY = `${LANGUAGE_1C_BSL_CONFIG}.analyzeAllFiles`;

describe("Configuration: analyzeAllFiles", () => {

    it("should be declared as boolean with default false", () => {
        const packageJson = JSON.parse(
            fs.readFileSync(Paths.join(__dirname, "..", "..", "package.json"), "utf-8")
        );
        const setting = packageJson.contributes.configuration.properties[SETTING_KEY];

        assert.ok(setting, `Setting ${SETTING_KEY} must be declared in package.json`);
        assert.equal(setting.type, "boolean");
        assert.equal(setting.default, false);
    });
});
