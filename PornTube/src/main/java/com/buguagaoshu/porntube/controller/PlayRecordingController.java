package com.buguagaoshu.porntube.controller;

import com.buguagaoshu.porntube.service.PlayRecordingService;
import com.buguagaoshu.porntube.service.PlayRecordingWithArticleService;
import com.buguagaoshu.porntube.vo.ResponseDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/**
 * @author Pu Zhiwei {@literal puzhiweipuzhiwei@foxmail.com}
 * create          2020-09-09 18:13
 */
@RestController
public class PlayRecordingController {
    private final PlayRecordingWithArticleService playRecordingWithArticleService;

    @Autowired
    public PlayRecordingController(PlayRecordingWithArticleService playRecordingWithArticleService) {
        this.playRecordingWithArticleService = playRecordingWithArticleService;
    }

    @GetMapping("/api/user/playrecording/list")
    public ResponseDetails list(@RequestParam Map<String, Object> params,
                                HttpServletRequest request) {
        return ResponseDetails.ok().put("data", playRecordingWithArticleService.playRecordingList(params, request));
    }
}
